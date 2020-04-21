function loadModel(){
    $("#EndGameModal").modal("show");
}
new Vue({
    'el':'#app',
    data:{
        dices:[],
        n:null,
        players:[
            {
                playerName:'',
                clickStyle:'choose',
                clickDisable:"",
                playerScore:0,
                bottom:44,
                click:0,
                left:73.5,
                right:'unset',
                dor:1,
                id:1,
                dices:[1,2,3,4,5,6],
                color: ''
            },
            {
                playerName:'Computer',
                clickStyle:'choose',
                clickDisable:"",
                playerScore:0,
                bottom:44,
                click:0,
                left:73.5,
                right:'unset',
                dor:1,
                id:2,
                dices:[4,5,6,1,2,3],
                color: '#2f4f4fbf'
            }
        ],
        clicks:1,
        colorsPlayer:[
            {color:"rgba(9, 175, 175, 0.75)"},
            {color:"rgba(156, 7, 7, 0.52)"},
            {color:"rgba(39, 41, 61, 0.79)"},
            {color:"#d1d8d7bd"},
            {color:"#0c480cab"}
        ],
        isActive: true,
    },
    computed:{
        
    },
    methods:{
        selectColorPlayer(data){
            this.players[0].color = data.color;
        },
        startGame(data){
            this.isActive = false;
            this.players[0].playerName = data;
            
        },
        newGame(){
            location.reload()
        },
        randomValue(data,s){
            
            this.players[0].clickDisable="clickDisable";
            setTimeout(() =>{
                const bottomConst = 44;
                const leftConst=73.5;
                const leftConstRe=1018.5;
                const bottomIncrement=60;
                const leftIncrement=105;
                
                data.clickDisable="clickDisable";
                data.clickStyle = "choose";
                data.click+=1; 
                this.dices = data.dices ;
                var vm = this;
                var array = vm.dices
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                    data.n=j;

                }
                vm.$set(vm.dices, array)
            
                setTimeout(() => data.clickStyle = "", 900)
                setTimeout(() => data.clickDisable = "", 900)
                data.playerScore = (data.playerScore +this.dices[0] );
                //  data.playerScore =51 ;
                var  digits = data.playerScore.toString().split('');
                var realDigits = digits.map(Number);
                
                setTimeout(() => {
                    //increment left to right
                    if(data.playerScore >= 1 && data.playerScore <= 11 || data.playerScore >= 20 && data.playerScore <= 30 || data.playerScore >= 40 && data.playerScore <= 50 || data.playerScore > 59 && data.playerScore <= 70 || data.playerScore >= 80 && data.playerScore <= 90){
                        
                        if(realDigits[1]){
                            if(realDigits[1] ==0 ){
                                data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConst;
                            }else if(realDigits[1] !=0){
                                data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = (realDigits[1]*leftIncrement)+leftConst;   
                            }
                        }
                        if(!realDigits[1]){
                            data.left = (realDigits[0]*leftIncrement)+leftConst;  
                        }

                    }
                    if(data.playerScore > 98){
                        data.left = leftConst;
                        data.bottom = (9*bottomIncrement)+bottomConst;
                        loadModel();
                    }
                    //increment right to left
                    if(data.playerScore >9  && data.playerScore <20 || data.playerScore >= 30 && data.playerScore < 40 || data.playerScore >= 50 && data.playerScore < 60  || data.playerScore >= 70 && data.playerScore < 80 || data.playerScore >= 90 && data.playerScore <= 99){
                        
                            if(realDigits[1] ==0 ){
                                data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe;
                            }else if(realDigits[1] !=0){
                                data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                            }
                            
                        
                    }
                    // Super Jump And Super Fail
                    setTimeout(() =>{
                        // Super Jump
                        if(data.playerScore == 2){
                            data.playerScore = 20;
                            data.left=leftConst;
                            data.bottom = (2*bottomIncrement)+bottomConst;
                        }
                        if(data.playerScore == 7){   
                            data.playerScore = 29;
                            data.left=leftConst;
                            data.left = leftConstRe;
                            data.bottom = (2*bottomIncrement)+bottomConst;      
                        }
                        if(data.playerScore == 27){  
                            data.playerScore = 83;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            // data.left=leftConst;
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                            data.left = (realDigits[1]*leftIncrement) + leftConst ;   
                        }
                        if(data.playerScore == 57){
                            data.playerScore = 76;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        if(data.playerScore == 74){  
                            data.playerScore = 85;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            // data.left=leftConst;
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                            data.left = (realDigits[1]*leftIncrement) + leftConst ;   
                        }
                        if(data.playerScore == 79){
                            data.playerScore = 99;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (9*bottomIncrement)+bottomConst;
                            data.left = leftConst;
                        }
                        if(data.playerScore == 89){  
                            data.playerScore = 90;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        // End Super Jump

                        // Super Fail
                        if(data.playerScore == 16){  
                            data.playerScore = 11;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        if(data.playerScore == 51){  
                            data.playerScore = 28;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            // data.left=leftConst;
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                            data.left = (realDigits[1]*leftIncrement) + leftConst ;   
                        }
                        if(data.playerScore == 56){  
                            data.playerScore = 39;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        if(data.playerScore == 61){  
                            data.playerScore = 21;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            // data.left=leftConst;
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                            data.left = (realDigits[1]*leftIncrement) + leftConst ;   
                        }
                        if(data.playerScore == 87){  
                            data.playerScore = 17;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        if(data.playerScore == 94){  
                            data.playerScore = 50;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        if(data.playerScore == 96){  
                            data.playerScore = 78;
                            var  digits = data.playerScore.toString().split('');
                            var realDigits = digits.map(Number);
                            data.bottom = (realDigits[0]*bottomIncrement)+bottomConst;
                                data.left = leftConstRe-(realDigits[1]*leftIncrement);
                        }
                        // End Super Fail

                    } , 900)

                    
                    this.clicks ++;
                }, 1000);
                
            } , s)
            
            
            
        },
        
    },
    
    
});

