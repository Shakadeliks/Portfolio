import {
    WorkContainer,
    WorkIcon,
    ProjectsGridContainer,
    WorkHeading,
    WorkCard,
    ProjectImg,
    ProjectTitle,
    ImgWrap,
    HoverOverlay,
    ProjectLinks,
    LinkBtn
} from "./Work.styles"
import Giza from "../../assets/giza.png"
import Pyramid1 from "../../assets/pyramid.png"
import Pyramid2 from "../../assets/pyramids.png"
import PriceGridComponent from "assets/price-grid-component.png"
import CrowdfundingProductPage from "assets/crowdfunding-product-page.png"
import ECommercePage from "assets/e-commerce-page.png"
import ECommerceStore from "assets/e-commerce-store.png"
import WeatherApp from "assets/weather-app.png"
import SnakeGame from "assets/snake-game.png"
import Calculator from "assets/calculator.png"
import ToDoList from "assets/to-do-list.png"

const Work = () => {

    const ProjectData = [
        {
            Title: "Single Price Grid Component",
            Image: PriceGridComponent,
            LiveUrl: "https://shakadeliks.github.io/Single-Price-Component/",
            GithubRepo: "https://github.com/Shakadeliks/Single-Price-Component"
        },
        {
            Title: "Crowdfunding Product Page",
            Image: CrowdfundingProductPage,
            LiveUrl: "https://shakadeliks.github.io/Crowdfunding-Product-Page/",
            GithubRepo: "https://github.com/Shakadeliks/Crowdfunding-Product-Page"
        },
        {
            Title: "E-Commerce Product Page",
            Image: ECommercePage,
            LiveUrl: "https://shakadeliks.github.io/E-Commerce-Product-Page/",
            GithubRepo: "https://github.com/Shakadeliks/E-Commerce-Product-Page"
        },
        {
            Title: "E-Commerce Store",
            Image: ECommerceStore,
            LiveUrl: "https://shakadeliks.github.io/E-Commerce-Store/",
            GithubRepo: "https://github.com/Shakadeliks/E-Commerce-Store"
        },
        {
            Title: "Weather App",
            Image: WeatherApp,
            LiveUrl: "https://shakadeliks.github.io/weather-app/",
            GithubRepo: "https://github.com/Shakadeliks/Weather-app"
        },
        {
            Title: "Snake Game",
            Image: SnakeGame,
            LiveUrl: "https://shakadeliks.github.io/Snake-Game/",
            GithubRepo: "https://github.com/Shakadeliks/Snake-Game"
        },
        {
            Title: "Calculator",
            Image: Calculator,
            LiveUrl: "https://shakadeliks.github.io/Calculator/",
            GithubRepo: "https://github.com/Shakadeliks/Calculator"
        },
        {
            Title: "To-Do List",
            Image: ToDoList,
            LiveUrl: "https://shakadeliks.github.io/To-Do-List/",
            GithubRepo: "https://github.com/Shakadeliks/To-Do-List"
        }
    ]

    return (
        <>
            <WorkContainer id="work">
                <WorkIcon src={Giza} />
                <WorkHeading>
                    Some of the projects I have made
                </WorkHeading>
                <ProjectsGridContainer>

                {ProjectData.map((project, index) => (
                    <WorkCard key={index} style={{
                        backgroundImage: `url(${project.Image})`
                    }}>
                        <HoverOverlay>
                            <ProjectTitle>
                                {project.Title}
                            </ProjectTitle>
                            <ProjectLinks>
                                <LinkBtn href={project.LiveUrl} target="_blank">
                                    Live Site
                                </LinkBtn>
                                <LinkBtn href={project.GithubRepo} className="gitBtn" target="_blank">
                                    Github
                                </LinkBtn>
                            </ProjectLinks> 
                        </HoverOverlay>  
                        
                    </WorkCard>
                ))}    
                    
                </ProjectsGridContainer>
                    
            </WorkContainer>
        </>
    )
}

export default Work
