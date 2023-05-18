        let numFirst = ''; //계산 입력 첫 번째
        let numSecond = ''; //두 번째
        let op_input = null; //입력된 연산자 저장 변수

        //higher-order function
        const numFunc = (n) => { //n -- '0', ... , '9'
            //함수를 만들어서 return함
            return () => {
                if (op_input === null) {
                    numFirst = numFirst + n;
                    cp_input_num.value = numFirst;
                }
                else {
                    numSecond = numSecond + n;
                    cp_input_num.value = numSecond;
                }
            };
        }; 
            // operator 실행 되기 전에는 numFirst에 숫자 계속 쌓음.
            // (op_input === null) : 연산자가 입력되기 전이라는 뜻
            // 화살표 함수 (=>), addEventListener는 실제 함수를 호출할 때 쓰는 argument 함수

        const opFunc = (op) => {
            return () => {
                switch (op) {
                    case '+' :
                    case '-' :
                    case '*' :
                    case '/' :
                        op_input = op;
                        cp_input_op.value = op_input;
                        break;
                    case '=' :
                        switch (op_input) {
                            case '+' :
                                cp_input_num.value = parseInt(numFirst) + parseInt(numSecond);
                                break;
                            case '-' :
                                cp_input_num.value = parseInt(numFirst) - parseInt(numSecond);
                                break;
                            case '*' :
                                cp_input_num.value = parseInt(numFirst) * parseInt(numSecond);
                                break;
                            case '/' :
                                cp_input_num.value = parseInt(numFirst) / parseInt(numSecond);
                                break;
                        }
                        break;
                    case 'C' :
                        numFirst = '';
                        numSecond = '';
                        cp_input_num.value = '';
                        cp_input_op.value = '';
                        break;
                }
            };
        }
        const cp_input_num = document.querySelector('#result');
        const cp_input_op = document.querySelector('#operator');
        // result에 값 출력하도록 명령

        document.querySelector('#n0').addEventListener('click', numFunc('0'));
        document.querySelector('#n1').addEventListener('click', numFunc('1'));
        document.querySelector('#n2').addEventListener('click', numFunc('2'));
        document.querySelector('#n3').addEventListener('click', numFunc('3'));
        document.querySelector('#n4').addEventListener('click', numFunc('4'));
        document.querySelector('#n5').addEventListener('click', numFunc('5'));
        document.querySelector('#n6').addEventListener('click', numFunc('6'));
        document.querySelector('#n7').addEventListener('click', numFunc('7'));
        document.querySelector('#n8').addEventListener('click', numFunc('8'));
        document.querySelector('#n9').addEventListener('click', numFunc('9'));

        document.querySelector('#op_plus').addEventListener('click', opFunc('+'));
        document.querySelector('#op_sub').addEventListener('click', opFunc('-'));
        document.querySelector('#op_mul').addEventListener('click', opFunc('*'));
        document.querySelector('#op_div').addEventListener('click', opFunc('/'));
        document.querySelector('#op_c').addEventListener('click', opFunc('='));
        document.querySelector('#op_clr').addEventListener('click', opFunc('C'));