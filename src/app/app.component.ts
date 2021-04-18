import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rk-portfolio';
  cakdeleverytitle='An Android application for delivery the cakes to the ordered locations';
  tavelcoriertiitle=`An Android application for transfering the packages from one location to another with the genral travling services.`;
  ivrtitle=`An Ivr system for automatic call answer and provide services to the customers. The system automatically forward the calls to the desired customers`;

  cakedelevery=`
  Cake Delivery is build with Ionic, Angular, and Firebase . A Node.js 
  hosted on firebase cloud functions acts as a middle-man, 
  handling backend logic and database updates within Firebase. 
  This is app also contain a admin panel for managing the cake products data and orders from the users.
  `;
  travelcourier=`
  Travel courier  is build with Ionic, Angular, and .Net Web api Hosted on AWS and sql server to manage the data.
  I had developed the  web api without need of model object.Because of this approach i don't need to add or modify the
  model object when it comes to the change occurrence. I can modify everything from the sql server with sql store procedures.
  `;
  ivrsystem=`
  IVR system is build with node js and hosted on aws cloud.
   It will automatically answer the incomming call and provide service to the customers. 
   I had developed this using twilio voice service with twilio twiml.
  `;
}
