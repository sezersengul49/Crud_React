
const formatDate =(date) => {
    const dateObj =new Date(date);

    return dateObj.toLocaleDateString('tr-TR',{
        day:'numeric',
        month:'long'
    });
};
export default formatDate;