export const API_KEY = 'AIzaSyALlzsKn7CZyP_69UKSxl8X57k5_8qEkp8' 

export const valueConverter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + 'M';
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + 'K';
    }
    else{
        return value;
    }
}