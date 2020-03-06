window.addEventListener("load", changeFirst, true)


function changeFirst() {
    document.getElementById('btn1').addEventListener('click', function() {
        document.getElementById('picture-box').style.backgroundImage = "url('img/45_1.jpg')";
        document.getElementById('picture-box').style.backgroundRepeat = 'no-repeat';
        document.getElementById('text-box').innerHTML = 'Установление целей включает определение участков работы подчиненного, чего он хочет на этих участках достигнуть и план по достижению установленных результатов';
    });
};

window.addEventListener("load", changeSecond, true)


function changeSecond() {
    document.getElementById('btn2').addEventListener('click', function() {
        document.getElementById('picture-box').style.backgroundImage = "url('img/45_2.jpg')";
        document.getElementById('picture-box').style.backgroundRepeat = 'no-repeat';
        document.getElementById('text-box').innerHTML = 'Степень участия подичненного может быть разной в зависимости от организационных условий. Эффективное участие подчиненного предполагает наличие у него возможности влиять на их изменение. Это дает ему возможность планировать и контролировать свои действия, определять способ их выполнения.';
    });
};

window.addEventListener("load", changeThird, true)


function changeThird() {
    document.getElementById('btn3').addEventListener('click', function() {
        document.getElementById('picture-box').style.backgroundImage = "url('img/45_3.jpg')";
        document.getElementById('picture-box').style.backgroundRepeat = 'no-repeat';
        document.getElementById('text-box').innerHTML = 'Выполнение работы, ка кодна из стадий, включает разработку плана действий, описывающего, каким образом цель будет достигнута. Руководитель должен выносить на обсуждение достигнутые результаты, требуемую помощь и корректировку целей; больше играть роль наставника, чем судьи. Такой подход поможет понять подчиненным, что УПЦ - это не жестко формализованное упражнение, а возможность к большей открытости в коммуникациях и гибкость в работе.';
    });
};

window.addEventListener("load", changeFourth, true)


function changeFourth() {
    document.getElementById('btn4').addEventListener('click', function() {
        document.getElementById('picture-box').style.backgroundImage = "url('img/45_4.jpg')";
        document.getElementById('picture-box').style.backgroundRepeat = 'no-repeat';
        document.getElementById('text-box').innerHTML = 'Оценка выполнения работы включает: определение показателя; измерение самого результата. Показатель измерения работы по возможности должен носить универсальный характер, что помогает оценивать усилия в правильном направлении и в связи с другими участками работы. В УПЦ большое внимание уделяется самооценке в выполнении работы.';
    });
};

window.addEventListener("load", changeFifth, true)


function changeFifth() {
    document.getElementById('btn5').addEventListener('click', function() {
        document.getElementById('picture-box').style.backgroundImage = "url('img/45_5.jpg')";
        document.getElementById('picture-box').style.backgroundRepeat = 'no-repeat';
        document.getElementById('text-box').innerHTML = 'Обратная связь (см. раздел "Коммуникации") является ключевым элементом УПЦ, устанавливающим степень достижения цели. Знание результата помогает определить направление улучшения работы, развития самого исполнителя с точки зрения его подготовки, отношения к работе и мотивации. Процедура обратной связи в УПЦ строится из определения достигнутых результатов и разработки мер по их дальнейшему улучшению.';
    });
};