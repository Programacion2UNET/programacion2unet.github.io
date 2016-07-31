function smoothScroll(selector) {
   var target = document.getElementById(selector);
   var move_up = (document.body.scrollTop > target.offsetTop);

    // time when scroll starts
    var start = new Date().getTime(),

        // set an interval to update scrollTop attribute every 25 ms
        timer = setInterval(function() {

            // calculate the step, i.e the degree of completion of the smooth scroll 
            var step = Math.min(1, (new Date().getTime() - start) / 500);

            // calculate the scroll distance and update the scrollTop
            if (move_up){
                document.body.scrollTop = document.body.scrollTop - document.body.scrollTop*step;
                document.documentElement.scrollTop = document.body.scrollTop - document.body.scrollTop*step;
            }  
            else {
                document.body.scrollTop = (step * target.offsetTop);
                document.documentElement.scrollTop = (step * target.offsetTop);
            }


console.log(step + "*"+ target.offsetTop);
            // end interval if the scroll is completed
            if (step == 1) clearInterval(timer);
        }, 25);
}