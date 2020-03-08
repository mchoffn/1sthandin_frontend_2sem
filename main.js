new Vue({
    el: '#app',
    data: {
        name: 'Andreas'

    },
    methods:{

        playAudio(key){
            switch(key){

                     case '1':
                    const tom1 = new Audio('/sounds/tom-1.mp3');
                    tom1.play();
                    break;

                    case '2':
                    const crash = new Audio('/sounds/crash.mp3');
                    crash.play();
                    break;

                    case '3':
                    const kick = new Audio('/sounds/kick-bass.mp3');
                    kick.play();
                    break;

                    case '4':
                    const snare = new Audio('/sounds/snare.mp3');
                    snare.play();
                    break;

            }
        }
        
    },
    created(){
        document.addEventListener('keypress', e => {
            this.playAudio(e.key)
        })
    }

})