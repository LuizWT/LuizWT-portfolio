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
        title: "AutoRecon",
        description:
            "O AutoRecon é um projeto de automação de ferramentas de segurança focado em facilitar o processo de varredura e coleta de informações em ambientes de rede.",

        imageUrl: "/assests/AutoRecon.png",
        repoUrl: "https://github.com/LuizWT/AutoRecon",
    },
    {
        title: "SM64Crypt",
        description:
            "O SM64Crypt é uma ferramenta eficiente para criptografia e descriptografia de arquivos, inspirada no jogo Super Mario 64.",

        imageUrl: "/assests/SM64Crypt.png",
        repoUrl: "https://github.com/LuizWT/SM64Crypt",
    },
        {
        title: "CryptoMatrix",
        description:
            "O CryptoMatrix é um sistema de Criptografia por Matriz 3D com Chave Compartilhada.",

        imageUrl: "/assests/CryptoMatrix.png",
        repoUrl: "https://github.com/LuizWT/CryptoMatrix",
    },
];