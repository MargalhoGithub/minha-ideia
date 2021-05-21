function tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
             <div> {dynamicDateString}  (dinâmico)</div>  
             <div> {props.dynamicDateString}(estático)</div> 
        </div>
    )
}


export function getStaticprops(){

} const staticDate = new Date();
    const dynamicDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }


export default tempo;
