 fetch("assets/source.txt")
        .then((resp) => resp.text())
        .then((data) => data.split('\n')
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 3)
                            .join('<br/>').replaceAll(' ', '_'))
        .then((data) => document.getElementById('maindiv').innerHTML = data ) 

