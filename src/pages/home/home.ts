import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

 import { mapStyle } from './mapStyle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) export class HomePage {

  lat: number = 21.4229;
  lng: number = 39.8257;

  // For maps styling
  style = mapStyle;

}