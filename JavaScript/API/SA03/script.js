const noticias = document.getElementById('noticias');
const mensagem = document.getElementById('mensagem');
const termo = document.getElementById('termo');
const atualizar = document.getElementById('atualizar');

function criarCard(item) {
    const card = document.createElement('article');
    card.className = 'noticia';

    try {
        const foto = JSON.parse(item.imagens || '{}').image_intro;
        if (foto) {
            const imagem = document.createElement('img');
            imagem.src = new URL(foto, 'https://agenciadenoticias.ibge.gov.br/').href;
            imagem.alt = item.titulo;
            imagem.loading = 'lazy';
            imagem.onerror = () => imagem.remove();
            card.appendChild(imagem);
        }
    } catch (erro) {
        console.error('Imagem indisponível:', erro);
    }

    const texto = document.createElement('div');
    texto.className = 'noticia-texto';
    const etiqueta = document.createElement('span');
    etiqueta.className = 'tag-categoria';
    etiqueta.textContent = 'IBGE';
    const titulo = document.createElement('h3');
    const link = document.createElement('a');
    link.href = item.link.replace('http://', 'https://');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = item.titulo;
    titulo.appendChild(link);
    const resumo = document.createElement('p');
    resumo.textContent = item.introducao || 'Leia a notícia completa no site do IBGE.';
    const data = document.createElement('small');
    data.textContent = item.data_publicacao ? `Publicado em ${item.data_publicacao.split(' ')[0]}` : '';
    texto.append(etiqueta, titulo, resumo, data);
    card.appendChild(texto);
    return card;
}

async function carregarNoticias() {
    const url = new URL('https://servicodados.ibge.gov.br/api/v3/noticias/');
    url.searchParams.set('tipo', 'noticia');
    url.searchParams.set('qtd', '9');
    if (termo.value.trim()) url.searchParams.set('busca', termo.value.trim());

    atualizar.disabled = true;
    noticias.replaceChildren();
    mensagem.textContent = 'Carregando notícias...';

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error('Falha na consulta');
        const dados = await resposta.json();
        if (!Array.isArray(dados.items)) throw new Error('Resposta inválida');
        const resultados = dados.items.filter(item => item.titulo && item.link);
        resultados.forEach(item => noticias.appendChild(criarCard(item)));
        mensagem.textContent = resultados.length
            ? `${resultados.length} notícias encontradas. Clique em um título para ler no site do IBGE.`
            : 'Nenhuma notícia encontrada. Tente outro termo.';
    } catch (erro) {
        console.error(erro);
        mensagem.textContent = 'Não foi possível carregar as notícias. Confira a conexão e tente atualizar.';
    } finally {
        atualizar.disabled = false;
    }
}

document.getElementById('busca').addEventListener('submit', evento => {
    evento.preventDefault();
    carregarNoticias();
});
atualizar.addEventListener('click', carregarNoticias);
document.getElementById('inicio-link').addEventListener('click', () => {
    termo.value = '';
    carregarNoticias();
});

carregarNoticias();
