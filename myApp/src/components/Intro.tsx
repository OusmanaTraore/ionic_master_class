import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './Intro.css'

interface ContainerProps{
    onFinish:() => void;
}

const Intro : React.FC<ContainerProps> = () => {

    return (
    <Swiper>
        <SwiperSlide>
            <IonText>Build awsome apps with Ionic</IonText>
        </SwiperSlide>
    </Swiper>
    );
};

export default  Intro;