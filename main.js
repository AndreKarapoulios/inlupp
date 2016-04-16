/**
 * Created by andre on 2016-04-13.
 */
var button = document.getElementById('button');

button.addEventListener('click', function () {
    addtolist();
});

function addtolist() {
    var getlist = document.getElementById('nått');
    var input = document.getElementById('in');

    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerText = input.value;

    var buttdel = document.createElement('button');
    buttdel.innerText = 'Delete';
    buttdel.addEventListener('click', function () {
        getlist.removeChild(li);
    });

    var buttedit = document.createElement('button');
    buttedit.innerText = 'Edit';

    buttedit.addEventListener('click', function () {
        var liedit = document.createElement('li');
        var edittext = document.createElement('input');
        var buttconfirm = document.createElement('button');
        buttconfirm.innerText = 'Confirm';

        buttconfirm.addEventListener('click', function () {
            var liafteredit = document.createElement('li');
            var spanedit = document.createElement('span');
            spanedit.innerText = edittext.value;

            var buttondeledit = document.createElement('button');
            buttondeledit.innerText = 'Delete';
            buttondeledit.addEventListener('click', function () {
                getlist.removeChild(liafteredit);
            });

            var buttondoneedit = document.createElement('button');
            buttondoneedit.innerText = 'Done';
            buttondoneedit.addEventListener('click', function () {
                liafteredit.parentNode.removeChild(liafteredit);
                var getlistedited = document.getElementById('nåtannat');
                var liedited = document.createElement('li');
                var spanedited = document.createElement('span');
                spanedited.innerText = spanedit.innerText;

                var buttonDeleteEdited = document.createElement('button');
                buttonDeleteEdited.innerText = 'Delete';
                buttonDeleteEdited.addEventListener('click', function () {
                    getlistedited.removeChild(liedited);
                });
                liedited.appendChild(spanedited);
                liedited.appendChild(buttonDeleteEdited);
                getlistedited.appendChild(liedited);
            });
            liafteredit.appendChild(spanedit);
            liafteredit.appendChild(buttondeledit);
            liafteredit.appendChild(buttondoneedit);

            getlist.replaceChild(liafteredit, liedit);
        });
        liedit.appendChild(edittext);
        liedit.appendChild(buttconfirm);
        getlist.replaceChild(liedit, li);
        edittext.value = span.innerText;
    });

    var buttdone = document.createElement('button');
    buttdone.innerText = 'Done';

    buttdone.addEventListener('click', function () {
        var getlist2 = document.getElementById('nåtannat');

        var li2 = document.createElement('li');
        var span2 = document.createElement('span');
        span2.innerText = span.innerText;

        var buttdel2 = document.createElement('button');
        buttdel2.innerText = 'Delete';
        buttdel2.addEventListener('click', function () {
            getlist2.removeChild(li2);
        });
        li2.appendChild(span2);
        li2.appendChild(buttdel2);
        getlist2.appendChild(li2);
        getlist.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(buttdel);
    li.appendChild(buttdone);
    li.appendChild(buttedit);
    getlist.appendChild(li);
    input.value = '';
}

