import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from 'react';
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FCC from '../assets/dev-black.png'
import Intro from "../components/Intro";

const Login: React.FC = () => {
    // const router = useIonRouter();
// const {introSeen,setIntroSeen} = useState(false);
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    }

    const finishIntro = async() => {
        console.log('FIN')
    }
    return (
        // <>
        // {!introSeen ? 
        // (<Intro onFinish={finishIntro }/>)
        // : ( 
    // }
      
        <IonPage>
        <IonHeader >
         <IonToolbar color={'dark'}>
         <IonTitle color={'primary'}>LogIN or SignIN</IonTitle>
         </IonToolbar>
        </IonHeader>

        <IonContent scrollY={false}>
            <div className="ion-text-center ion-padding">
                <img src={FCC} alt="FCC logo" width={'20%'}/>
            </div>
            <IonCard>
                <IonCardContent>
                 <form onSubmit={doLogin}>
                    <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="traoreosman@yahoo.fr" />
                    <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="traoreosman@yahoo.fr" />
                 <IonButton className="ion-margin-top" type="button" expand="block">Login
                <IonIcon icon= {logInOutline} slot="end"></IonIcon>
                 </IonButton>
                 <IonButton routerLink="/register" color={'secondary'} type="button" expand="block">Create Account 
                <IonIcon icon= {personCircleOutline} slot="end"></IonIcon>
                 
                 </IonButton>
                 </form>
                </IonCardContent>
            </IonCard>
        </IonContent>
    
   </IonPage>
        // {/* )} */
        // }
        );
        // </>

    };
export default Login
