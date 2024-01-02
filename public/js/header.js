
    function showNav() {
        let nav = document.getElementsByTagName('nav');
    let header = document.getElementsByTagName('header');

        if(header[0].style.height >= '11%') {
            header[0].style.height = '10vh';
            nav[0].style.display = 'none';
        }else{
            header[0].style.height = '70vh';
            nav[0].style.display = 'flex';
            console.log('h')
        }
    }
