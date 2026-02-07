from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai.agents.agent_builder.base_agent import BaseAgent
from typing import List
from aqua_trace.tools.custom_tool import SSTDataFetcherTool, GamificationManagerTool, CoralBleachingClassifierTool

@CrewBase
class CoralWatchCrew():
    """CoralWatch Crew: specialized in monitoring coral health and engaging users."""

    agents: List[BaseAgent]
    tasks: List[Task]

    @agent
    def visual_analyst(self) -> Agent:
        return Agent(
            config=self.agents_config['visual_analyst'],
            tools=[CoralBleachingClassifierTool()],
            verbose=True,
            allow_delegation=False,
            # Enabling vision capabilities for image processing
            # Ensure your LLM provider supports vision (e.g., GPT-4o, Gemini Pro Vision)
            allow_images=True 
        )

    @agent
    def oceanographer(self) -> Agent:
        return Agent(
            config=self.agents_config['oceanographer'],
            tools=[SSTDataFetcherTool()],
            verbose=True
        )

    @agent
    def community_manager(self) -> Agent:
        return Agent(
            config=self.agents_config['community_manager'],
            tools=[GamificationManagerTool()],
            verbose=True
        )

    @task
    def image_diagnosis_task(self) -> Task:
        return Task(
            config=self.tasks_config['image_diagnosis_task'],
            agent=self.visual_analyst(),
            output_file='coral_health_diagnosis.md'
        )

    @task
    def environmental_assessment_task(self) -> Task:
        return Task(
            config=self.tasks_config['environmental_assessment_task'],
            agent=self.oceanographer()
        )

    @task
    def user_response_task(self) -> Task:
        return Task(
            config=self.tasks_config['user_response_task'],
            agent=self.community_manager(),
            output_file='whatsapp_response.md'
        )

    @crew
    def crew(self) -> Crew:
        """Creates the CoralWatch crew"""
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
            memory=False # Disabled to avoid OpenAI embedding requirements
        )