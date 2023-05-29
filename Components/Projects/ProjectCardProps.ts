export interface ProjectCardProps {
    title: string,
    description: string,
    technologies: string[],
    image: string,
    links: {
        url: string,
        github: string,
    }
}