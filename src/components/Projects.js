import styled from 'styled-components';
import { projects } from '../projectsData';

const Projects = () => {
	console.log(projects);
	const Content = styled.div``;

	const Project = styled.div`
		margin-top: 40px;
		border-bottom: 1px solid #21212130;

		@media screen and (min-width: 1200px) {
			width: 1200px;
			max-width: 100%;
			margin: 0 auto;
			margin-top: 100px;
			p {
				margin-top: 37px;
			}
		}

		.written-content {
			@media screen and (min-width: 768px) {
				display: flex;
				justify-content: space-between;
				gap: 80px;
				div {
				}
			}
		}

		h3 {
			text-transform: uppercase;
			margin-bottom: 10px;
		}

		h2 {
			line-height: 1.2;
			margin-bottom: 20px;
			@media screen and (min-width: 768px) {
				width: 400px;
				max-width: 100%;
			}
		}
		img {
			width: 100%;
			border-radius: 10px;
			margin-top: 40px;
			margin-bottom: 30px;
		}

		p {
			margin-bottom: 20px;
		}

		ul {
			margin-top: 10px;
			font-family: 'Roboto-mono', monospace;
			list-style: none;
			font-size: 12.5pt;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 30px;

			li {
				color: #fefefe;
				margin-top: 5px;
				background-color: #212121;
				border-radius: 5px;
				padding: 5px;
				margin-right: 20px;
				margin-bottom: 5px;
			}
		}

		.skills-links {
			div {
				width: 270px;
				display: flex;
				flex-direction: row;
				text-align: center;
				justify-content: center;
				@media screen and (min-width: 768px) {
					justify-content: left;
				}

				div {
					height: 50px;
					align-items: center;
					margin-left: 20px;
					@media screen and (min-width: 768px) {
						width: 100px;
						margin-left: 0;
						margin-right: 20px;
					}
				}
			}
			@media screen and (min-width: 768px) {
				width: 600px;
				max-width: 100%;
				justify-content: left;
			}
		}
	`;
	return (
		<>
			<Content>
				{Object.entries(projects).map((project, index) => {
					console.log(project[1].skills[index]);
					return (
						<Project key={index}>
							<div className='written-content'>
								<div>
									<h3>
										0{index + 1} - {project[1].id}
									</h3>
									<h2>{project[1].subtitle}</h2>
									<p>{project[1].description}</p>
								</div>
								<div className='skills-links'>
									<h4>Skills and Tools</h4>

									<ul>
										{project[1].skills.map((skill, skillIndex) => {
											return <li key={skillIndex}>{skill}</li>;
										})}
									</ul>
									<div>
										<div>
											<a
												href={project[1].url}
												target='blank'
												class='link-container'
											>
												Visit
												<span class='link-arrow'>➔</span>
											</a>
										</div>
										<div>
											<a
												href={project[1].urlGitHub}
												target='blank'
												class='link-container'
											>
												Github
												<span class='link-arrow'>➔</span>
											</a>
										</div>
									</div>
								</div>
							</div>

							<img src={project[1].image}></img>
						</Project>
					);
				})}
			</Content>
		</>
	);
};

export default Projects;
