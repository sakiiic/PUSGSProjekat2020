import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscRangeOptions, MbscSelectOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
  theme: 'windows',
  themeVariant: 'dark',
  lang: 'en'
};

const now = new Date();
const oneWay = false;
let departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
let returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
const week = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6, 23, 59)];

@Component({
  selector: 'app-let-rezervacija',
  templateUrl: './let-rezervacija.component.html',
  styleUrls: ['./let-rezervacija.component.scss']
})

export class LetRezervacijaComponent implements OnInit {

    origin = 'LTN';
    segmented = 'round';
    segmented2 = 'economy';

    selectSettings: MbscSelectOptions = {
        multiline: 2,
        height: 50,
        data: {
            url: 'https://trial.mobiscroll.com/airports/',
            remoteFilter: true,
            dataType: 'jsonp',
            processResponse: (data) => {
                const ret = [];
                if (data) {
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        ret.push({
                            value: item.code,
                            text: item.name,
                            html: '<div style="font-size:16px;line-height:18px;">' + item.name +
                                '</div><div style="font-size:10px;line-height:12px;">' + item.location + ', ' + item.code + '</div>'
                        });
                    }
                }
                return ret;
            }
        },
        filter: true,
        placeholder: 'Please select'
    };

    range: Array < Date > ;
    date: Array < Date > ;
    nonForm: Array < Date > ;
    external = week;

    dateSettings: MbscRangeOptions = {
        controls: ['date']
    };

    nonFormSettings: MbscRangeOptions = {
        showSelector: false
    };

    externalSettings: MbscRangeOptions = {
        showOnTap: false,
        showOnFocus: false,
        showSelector: false
    };

  constructor() { }

  ngOnInit(): void {
  }

}
