const baseUrl = 'http://localhost:3001/paletas';

const findPaletas = async () => {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();

  paletas.forEach((paleta) => {
    document.getElementById('paletaList').insertAdjacentHTML(
      'beforeend',
      `<div class="PaletaListaItem">
        <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2,
            )}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            <div class="PaletaListaItem__acoes Acoes">
              <button class="Acoes__editar" onclick="editPaleta(${
                paleta.id
              })">editar</button>
              <button class="Acoes__deletar" onclick="deletePaleta(${
                paleta.id
              })">deletar</button>
            </div>
          </div>
            <img class="PaletaListaItem__foto" src=${
              paleta.foto
            } alt=${`Paleta de ${paleta.sabor}`} />
        </div>`,
    );
  });
};

findPaletas();

const editPaleta = async (paletaId) => {
  const response = await fetch(`${baseUrl}/find-paleta/${paletaId}`);
  const paleta = await response.json();

  document.getElementById('id').value = paleta.id;
  document.getElementById('sabor').value = paleta.sabor;
  document.getElementById('descricao').value = paleta.descricao;
  document.getElementById('foto').value = paleta.foto;
  document.getElementById('preco').value = paleta.preco;
};

const findPaletaById = async () => {
  const id = document.getElementById('idPaleta').value;

  const response = await fetch(`${baseUrl}/find-paleta/${id}`);

  const paleta = await response.json();

  const paletaEscolhidaDiv = document.getElementById('paletaEscolhida');

  paletaEscolhidaDiv.innerHTML = `<div class="PaletaCardItem">
      <div>
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
      </div>
        <img class="PaletaCardItem__foto" src=${
          paleta.foto
        } alt=${`Paleta de ${paleta.sabor}`} />
    </div>`;
};

const submitPaleta = async () => {
  const sabor = document.getElementById('sabor').value;
  const descricao = document.getElementById('descricao').value;
  const foto = document.getElementById('foto').value;
  const preco = +document.getElementById('preco').value;

  const paleta = {
    sabor,
    descricao,
    foto,
    preco,
  };

  const response = await fetch(baseUrl + '/create', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(paleta),
  })
    .then((response) => {
      if (response.status === 400) {
        alert('Dados incorretos');
      }
    })
    .catch((err) => {
      console.log('Deu tudo errado');
      console.log(err);
    });

  const novaPaleta = await response.json();

  const html = `<div class="PaletaListaItem">
    <div>
      <div class="PaletaListaItem__sabor">${novaPaleta.sabor}</div>
      <div class="PaletaListaItem__preco">R$ ${novaPaleta.preco}</div>
      <div class="PaletaListaItem__descricao">${novaPaleta.descricao}</div>
    </div>
      <img class="PaletaListaItem__foto" src=${
        novaPaleta.foto
      } alt=${`Paleta de ${novaPaleta.sabor}`} />
    </div>`;

  document.getElementById('paletaList').insertAdjacentHTML('beforeend', html);

  document.getElementById('sabor').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('foto').value = '';
  document.getElementById('preco').value = '';
};
