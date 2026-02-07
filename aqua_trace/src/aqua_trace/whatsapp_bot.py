import os
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client  # <--- NEW IMPORT
from aqua_trace.crew import CoralWatchCrew
from datetime import datetime

app = Flask(__name__)

# --- CONFIGURATION ---
# You get these from your Twilio Console Dashboard
ACCOUNT_SID = 'AC70f103f62d4df72e44837925e3e3d7b5' # Replace with your actual Account SID
AUTH_TOKEN = '6c87da7768cd0a8b98fd76cc4998a892'    # Replace with your actual Auth Token
TWILIO_NUMBER = 'whatsapp:+14155238886' # This is usually the Sandbox number

@app.route('/whatsapp', methods=['POST'])
def whatsapp_reply():
    """
    Webhook to handle incoming WhatsApp messages.
    """
    # 1. Get incoming data
    incoming_msg = request.values.get('Body', '').lower()
    num_media = int(request.values.get('NumMedia', 0))
    user_phone = request.values.get('From') # The user's phone number
    
    # 2. Prepare an immediate "I'm working on it" response
    # This keeps Twilio happy because we reply instantly.
    resp = MessagingResponse()
    
    if num_media > 0:
        # A. Acknowledge receipt immediately
        msg = resp.message("🌊 Image received! Our AI agents are analyzing the coral health now. This may take 15-30 seconds...")
        
        # B. Run the heavy AI task
        # NOTE: In a real production app, we would use a background thread here.
        # For this hackathon/demo, we will run it and then PUSH a new message.
        try:
            image_url = request.values.get('MediaUrl0')
            
            # --- RUN CREW ---
            inputs = {
                'image_source': image_url,
                'latitude': 10.345, # Default or parsed from request
                'longitude': 72.345,
                'user_id': user_phone,
                'current_date': str(datetime.now().date())
            }
            
            # Run the crew
            result = CoralWatchCrew().crew().kickoff(inputs=inputs)
            final_text = str(result)
            
            # --- SEND SEPARATE FOLLOW-UP MESSAGE ---
            client = Client(ACCOUNT_SID, AUTH_TOKEN)
            client.messages.create(
                from_=TWILIO_NUMBER,
                body=f"🪸 *Analysis Complete* 🪸\n\n{final_text}",
                to=user_phone
            )
            
        except Exception as e:
            # Send error via Client if possible
            client = Client(ACCOUNT_SID, AUTH_TOKEN)
            client.messages.create(
                from_=TWILIO_NUMBER,
                body=f"⚠️ Error: {str(e)}",
                to=user_phone
            )
            
    else:
        msg = resp.message("Please send an image of a coral to start! 📸")

    # 3. Return the immediate TwiML response
    return str(resp)

if __name__ == '__main__':
    app.run(port=5000)