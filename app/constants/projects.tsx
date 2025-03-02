export interface ProjectI {
    title: string;
    description: string;
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
};


// insira os dados de projetos que voce possui aqui.
export const projects: ProjectI[] = [
    {
        title: "Portfólio", // titulo do seu projeto.
        description:
            "Meu portfólio profissional, desenvolvido com tecnologias modernas e utilizando um template open-source altamente customizável.", // breve descricao do seu projeto
        imageUrl: "/assests/portfolioImage.png", // imagem de banner do seu projeto, recomendo que coloque na pasta /assets/ na pasta public
        liveUrl: "https://luizwt-portfolio.onrender.com", // link do seu site deployado (se n houver pode deletar a linha)
        repoUrl: "https://github.com/LuizWT/LuizWT-portfolio", // link do seu rep
    },
    {
        title: "AutoRecon",
        description:
            "O AutoRecon é um projeto de automação de ferramentas de segurança focado em facilitar o processo de varredura e coleta de informações em ambientes de rede.",

        imageUrl: "/assests/autorecon.png",
        repoUrl: "https://github.com/LuizWT/AutoRecon",
    },
    {
        title: "SM64Crypt",
        description:
            "O SM64 Crypt é uma ferramenta eficiente para criptografia e descriptografia de arquivos, inspirada no jogo Super Mario 64.",

        imageUrl: "/assests/sm64Crypt.png",
        repoUrl: "https://github.com/LuizWT/SM64Crypt",
    },
];