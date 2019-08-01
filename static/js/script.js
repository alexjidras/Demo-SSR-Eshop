window.onload = function() {
    document.getElementById("main-testimonials").onmouseover = function() {
            anime({
                targets: '#weekDelivery',
                value: 100,
                round: 1,
                easing: "easeOutQuad",
                duration:3000,
            }); 

            anime({
                targets: '#newModelsLoop',
                value: 20,
                round: 1,
                easing: "easeOutQuad",
                duration:3000,
            });

            anime({
                targets: '#newClientLoop',
                value: 450,
                round: 1,
                easing: "easeOutQuad",
                duration:3000,
            });
        }

};
/***************************************************************************************************/ 