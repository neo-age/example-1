import './Slideshow.css'
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

export default function Slideshow() {
    const [current, setCurrent] = useState(0);
    const slides = document.getElementsByClassName('slideitem');
    const dots = document.getElementsByClassName('dot')
    //setTimeout(() => {
     //   nextslide()
    //}, 5000);
    const dots_clicked = (e)=>{
        
        var newcurrent = Number(e)
        var precurrent = current

        setCurrent(newcurrent)
        
        if (newcurrent === precurrent){

        }else{
            slides[newcurrent].classList.add('active');
        slides[precurrent].classList.remove('active');

        dots[newcurrent].classList.add('active');
        dots[precurrent].classList.remove('active');
        }
        

        //console.log(newcurrent)
        //console.log(precurrent)
    }
    //previous botton
    const prevslide = ()=>{
        //console.log('the previous botton')
        
        const lastSlide = slides.length - 1;
        var newCount = current - 1;
        setCurrent(newCount);
        var previousValue = newCount + 1;

        if(previousValue === 0){
            slides[lastSlide].classList.add('active');
            slides[previousValue].classList.remove('active');
            dots[lastSlide].classList.add('active');
            dots[previousValue].classList.remove('active');
            //console.log('1')
            setCurrent(lastSlide);
            newCount = lastSlide
        }else if(previousValue !== 0){
            slides[newCount].classList.add('active');
            slides[previousValue].classList.remove('active');
            dots[newCount].classList.add('active');
            dots[previousValue].classList.remove('active');
            //console.log('2')
        }
        //console.log('lastslide = '+lastSlide)
        //console.log('previous value of current = '+previousValue)
        //console.log('new value of current = '+newCount)
    }

    //next botton
    const nextslide = ()=>{
        //console.log('the next botton')

        var initialCount = 0
        var newCount = current + 1;
        setCurrent(newCount);
        var previousValue = newCount - 1;
        
        if(newCount !== slides.length){
            slides[newCount].classList.add('active');
            slides[previousValue].classList.remove('active');
            dots[newCount].classList.add('active');
            dots[previousValue].classList.remove('active');
        }else if(newCount === slides.length){
            setCurrent(0)
            newCount = initialCount
            slides[newCount].classList.add('active');
            slides[previousValue].classList.remove('active');
            dots[newCount].classList.add('active');
            dots[previousValue].classList.remove('active');
        }

        //console.log('previous value of current = '+previousValue)
        //console.log('new value of current = '+newCount)
    }
    return (
        <div className="slideshow">
            <div className="slideshow_wrapper">
                <div className="slide_controls">
                    <div className="slide_controls_arrows" onClick={prevslide}>
                    <ArrowLeft />
                    </div>
                    <div className="dot active" id="0" onClick={(e) => dots_clicked(e.target.id)}></div>
                    <div className="dot" id ="1" onClick={(e) => dots_clicked(e.target.id)}></div>
                    <div className="dot" id ="2" onClick={(e) => dots_clicked(e.target.id)}></div>
                    <div className="slide_controls_arrows" onClick={nextslide}>
                    <ArrowRight />
                    </div>
                </div>
                <div className="slide_items_contaner">
                <div className="slideitem active">
                    <div className="slide_back_img">
                        <img src="https://images.unsplash.com/photo-1633113216385-dcb68bfcd3b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="slide_item_img" alt="" />
                    </div>
                    <div className="slide_item_info">
                        <h1 className="slide_item_titel">why do something alone, when we can do it together.</h1>
                        <h3 className="slide_item_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                        <button className="slide_item_button">Read more</button>
                    </div>
                </div>
                <div className="slideitem">
                    <div className="slide_back_img">
                        <img src="https://images.unsplash.com/photo-1637996434228-c05671f05410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="slide_item_img" alt="" />
                    </div>
                    <div className="slide_item_info">
                        <h1 className="slide_item_titel">why do something alone, when we can do it together.</h1>
                        <h3 className="slide_item_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
                        <button className="slide_item_button">Read more</button>
                    </div>
                </div>
                <div className="slideitem">
                    <div className="slide_back_img">
                        <img src="https://images.unsplash.com/photo-1638063761235-ef06b127b6c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="slide_item_img" alt="" />
                    </div>
                    <div className="slide_item_info">
                        <h1 className="slide_item_titel">why do something alone, when we can do it together.</h1>
                        <h3 className="slide_item_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                        <button className="slide_item_button">Read more</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
