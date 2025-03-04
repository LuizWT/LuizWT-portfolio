import { exec } from "child_process";

const target = "luizwt-portfolio.onrender.com";
const interval = 2 * 60 * 1000; // 2 minutos em milissegundos

const ping = () => {
  exec(`ping -c 1 ${target}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao pingar ${target}: ${stderr}`);
    } else {
      console.log(`Ping bem-sucedido em ${target}:\n${stdout}`);
    }
  });
};

// Inicia o ping imediatamente e repete a cada 2 minutos
ping();
setInterval(ping, interval);
