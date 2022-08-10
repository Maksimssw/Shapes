const shapes = () => {
    const shapesWrapper = document.querySelector('.shapes__wrapper');

    // Создание блоков и добавление в обёртку
    for(let i = 0; i < 16; i++){
        const el = document.createElement('div');
        const block = document.createElement('div');
       
        block.classList.add('shapes__list');
        el.classList.add('shapes_close');

        block.appendChild(el);
        shapesWrapper.appendChild(block);
    }

    const blocksList = document.querySelectorAll('.shapes__list');

    // Рандомные числа от 1 до 16
    const arrNum = _.shuffle(_.range(1,17)).slice(0,16);

    // Добавление атрибутов рандомных чисел 
    arrNum.forEach((el, i) => blocksList[i].setAttribute('data-num', el));

    // Добавление фигур 
    blocksList.forEach(el => {
        const numList = +el.getAttribute('data-num');

        if(numList <= 4){
            el.classList.add('shapes_circle');
            el.setAttribute('data-figure', 'circle');
        } else if (numList >= 5 && numList <= 8){
            el.classList.add('shapes_box');
            el.setAttribute('data-figure', 'box');
        } else if(numList >= 9 && numList <= 12){
            el.classList.add('shapes_triangle');
            el.setAttribute('data-figure', 'triangle');
        } else{
            el.classList.add('shapes_rhomb');
            el.setAttribute('data-figure', 'rhomb');
        }
    })

    const arr = [];

    blocksList.forEach(el => {
        el.addEventListener('click', function(e){
            const figureAttr = el.getAttribute('data-figure');
            const block = el.querySelector('div');

            if(el.classList.contains('shapes_active')){
            }else{  

                const attrText = e.target.closest('.shapes__list').getAttribute('data-figure');

                const figures = document.querySelectorAll(`[data-figure="${attrText}"]`)

                let res = 0;

                figures.forEach(el => {
                    const block = el.querySelector('div');

                    if(block.classList.contains('shapes_close')){}else{
                        res += 1;
                    }
                })

                console.log(res);

                if(res < 3){
                    console.log(arr);
                    if(arr.length === 0){
                        el.classList.add('shapes_active');
                        block.classList.remove('shapes_close');
                        arr.push(figureAttr);
                    } else{
                        arr.forEach(item => {
    
                            if(item === figureAttr){
                                arr.push(figureAttr);
                                block.classList.remove('shapes_close');
                                el.classList.add('shapes_active');
                            }else if(arr.length === 4){
                                block.classList.remove('shapes_close');
                                arr.splice(0,16);

                                setTimeout(() => {

                                    blocksList.forEach(item => {
                                        item.classList.remove('shapes_active');
                                        item.querySelector('div').classList.add('shapes_close')
                                    });

                                    console.log(5);

                                }, 300);
                            } else {
                                block.classList.remove('shapes_close');
                                arr.splice(0,16);
                            
                                setTimeout(() => {
    
                                    block.classList.add('shapes_close');
                                    console.log(3);
    
                                    blocksList.forEach(item => {
                                        item.classList.remove('shapes_active');
                                        item.querySelector('div').classList.add('shapes_close')
                                    });
                                }, 300);
                            }
                        })
                    }
                } else {
                    block.classList.remove('shapes_close');
                    figures.forEach(el => {
                        const block = el.querySelector('div');
                        block.style.opacity = 1;
                    })
                }
            }
        });
    })

}

export default shapes;