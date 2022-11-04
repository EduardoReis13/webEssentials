
    // essa variável é global; ela 'vaza' para dentro do escopo das funções
    let first_paragraph_alternative = 'Ye, mais conhecido como Kanye West, é um rapper, ' +
        'compositor, produtor musical, diretor de arte e estilista americano, nativo ' +
        'de Atlanta, Geórgia.'

    let second_paragraph_alternative = 'Ye ficou famoso no início de sua carreira como produtor ' +
        'da Roc-A-Fella Records, onde ganhou reconhecimento pelo seu trabalho no álbum The ' +
        'Blueprint, de Jay-Z, assim como por hits para outros cantores como Alicia Keys, ' +
        'Ludacris, Janet Jackson e outros.';

    function change_bgc_func() {
        let color = document.body.style.backgroundColor;
        if(color === 'rgb(133, 97, 254)') {
            color = 'rgb(255, 255, 255)';
        } else {
            color = 'rgb(133, 97, 254)';
        }
        document.body.style.backgroundColor = color;
        console.log('cor trocada para ' + color);
    }
    function change_font_family() {
        let font = document.body.style.fontFamily;
        if(font === 'Arial') {
            font = 'Times New Roman';
        } else {
            font = 'Arial';
        }
        document.body.style.fontFamily = font;
        console.log('fonte trocada para ' + font);
    }
    function change_text_func() {
        let first_paragraph_main = document.getElementById('first').innerText;
        let second_paragraph_main = document.getElementById('second').innerText;

        // faz a troca
        let aux_first = first_paragraph_main;
        document.getElementById('first').innerText = first_paragraph_alternative;
        first_paragraph_alternative = aux_first;

        let aux_second = second_paragraph_main;
        document.getElementById('second').innerText = second_paragraph_alternative;
        second_paragraph_alternative = aux_second;

        console.log('Texto dos parágrafos trocado!');
    }
    function change_img_func() {
        let src = document.getElementById('minha_imagem').src;
        let splitted = src.split('/');
        let old = splitted[splitted.length - 1];
        let filename;

        if(old === 'goku.jpg') {
            filename = 'ye_smiling.jpg';
        } else {
            filename = 'goku.jpg';
        }
        src = src.replace(old, filename);
        document.getElementById('minha_imagem').src = src;

        console.log('Imagem trocada!');
    }