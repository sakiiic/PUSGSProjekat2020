import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscRangeOptions, MbscSelectOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
  theme: 'windows',
  themeVariant: 'dark',
  lang: 'sr'
};

const now = new Date();
const oneWay = false;
let departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
let returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);

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

    range = [departureDate, returnDate];

    rangeSettings: MbscRangeOptions = {
        display: 'bottom',
        startInput: '.md-leaving-date',
        endInput: '.md-return-date',
        min: now,
        showSelector: false,
        onSetDate: (event, inst) => {
            if (oneWay && event.control === 'calendar' && event.active === 'start') {
                inst._isVisible = false;
                inst.setActiveDate('start');
                inst._isVisible = true;
            }
            if (inst._markup) {
                inst._isValid = true;
                inst._markup.find('.mbsc-fr-btn-s .mbsc-fr-btn').removeClass('mbsc-fr-btn-d' + (oneWay ? ' mbsc-disabled' : ''));
            }
        },
        onBeforeClose: () => {
            if (oneWay) {
                return true;
            }
        },
        onSet: (event, inst) => {
            const values = inst.getVal();
            departureDate = values[0];
            if (!oneWay) {
                returnDate = values[1];
            }
        }
    };

  constructor() { }

  ngOnInit(): void {
  }

}
