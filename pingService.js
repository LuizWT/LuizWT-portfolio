import { exec } from "child_process";

const target = "https://luizwt-portfolio.onrender.com";
const interval = 2 * 60 * 1000; // 2 minutos

const checkSite = () => {
  exec(`curl -Is ${target} | head -n 1`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao acessar ${target}: ${stderr}`);
    } else {
      console.log(`Status de ${target}: ${stdout.trim()}`);
    }
  });
};

checkSite();
setInterval(checkSite, interval);
