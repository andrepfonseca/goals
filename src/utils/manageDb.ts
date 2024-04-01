import { createItem, deleteAllItems } from "database";

export const seedData = async () => {
  await createItem(
    "PlayStation 5",
    "https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132554_gg.jpg",
    3699.99,
    0
  );
  await createItem(
    "Cadeira Gamer KBM!",
    "https://images.kabum.com.br/produtos/fotos/471925/cadeira-gamer-kbm-gaming-cg600-preta-com-almofadas-descanso-para-pernas-retratil-reclinavel-kgcg600pt_1700828329_gg.jpg",
    719.9,
    0
  );
  await createItem(
    "Processador Intel i5",
    "https://images.kabum.com.br/produtos/fotos/405765/processador-intel-core-i5-13400-4-6ghz-max-turbo-cache-20mb-10-nucleos-16-threads-lga-1700-video-integrado-bx8071513400_1672688891_gg.jpg",
    1329.99,
    0
  );
  await createItem(
    "Robô Aspirador",
    "https://www.kabum.com.br/produto/114195/robo-aspirador-de-po-kabum-smart-500-recarregamento-automatico-filtro-hepa-controle-via-aplicativo-preto-kbsf000",
    739.9,
    739.9
  );
};

export const clearData = async () => {
  await deleteAllItems();
};
