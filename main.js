//1. 박스 2개 만들기
//2. 드랍다운 리스 만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템을 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전이 된다
//6. 드랍다운 리스트에서 아이템을 바꾸면 그 단위 기준으로 환전이 됨
//7. 숫자를 한국어로 읽는 법
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 됨

let currencyRatio = {
    USD : {
        KRW : 1184.36,
        USD : 1,
        VND : 22972.50,
        unit : "달러"
    },
    KRW : {
        KRW : 1,
        USD : 0.00084,
        VND : 19.40,
        unit : "원"
    },
    VND : {
        KRW : 0.0521,
        USD : 0.000044,
        VND : 1,
        unit : "동"
    }
};

let fromCurrency = 'USD';
let toCurrency = 'USD'

//console.log(currencyRatio["VND"]["unit"]);
document.querySelectorAll("#from-currency-list a")
        .forEach((menu)=>menu.addEventListener("click", function() {
            //1. 버튼을 가져온다
            //2. 버튼에 값을 바꾼다            
            document.getElementById("from-button").textContent=this.textContent;
            //3. 선택된 currency값을 변수에 저장해준다
            fromCurrency = this.textContent;
            convert("from");           
}));

document.querySelectorAll("#to-currency-list a")
        .forEach((menu) => menu.addEventListener("click", function() {
            document.getElementById("to-button").textContent = this.textContent;
            toCurrency = this.textContent;
            convert("to");            
}));

//1. 키를 입력하는 순간 
//2.환전이 되서 
//3.환전된 값이 보인다
function convert(type) {
    //1. 환전
    // 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지
    // 돈 * 환율 = 환전금액
    let amount = 0;
    if (type == "from") {
        amount = document.getElementById("from-input").value;
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

        document.getElementById("to-input").value = convertedAmount; 
    } else {
        amount = document.getElementById("to-input").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];

        document.getElementById("from-input").value = convertedAmount; 
    }    
}

//1. 드랍다운 리스트 에 값이 바낄때마다

