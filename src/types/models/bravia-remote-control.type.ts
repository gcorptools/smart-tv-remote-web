import http from 'http';
import { BaseRemoteControlAction } from '@/types/models/base-remote-control-action.type';
import { BaseRemoteControl } from '@/types/models/base-remote-control.type';
import { BRAVIA_ACTIONS } from '@/constants';

export class BraviaRemoteControl extends BaseRemoteControl {
  override sendAction(actionType: BaseRemoteControlAction): Promise<void> {
    const body = this._getIRCCCodeXMLBody(actionType.value);
    const options = this._getRequestOptions();
    return this._sendHTTPRequest(options, body);
  }

  protected override _getActions(): BaseRemoteControlAction[] {
    return Object.values(BRAVIA_ACTIONS);
  }

  /**
   * Send an HTTP Request to a Bravia TV with timeout
   * @param  {Object} options
   * @param  {String} body
   * @return {Promise}
   */
  private _sendHTTPRequest(options: any, body: string): Promise<void> {
    return new Promise((resolve, reject) => {
      let req = http.request(options, (res) => {
        this._activeRequest = true;

        if (this.debug) {
          console.log(`STATUS: ${res.statusCode}`);
          console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        }
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
          if (this.debug) {
            console.log(`BODY: ${chunk}`);
          }
        });

        res.on('end', () => {
          this._activeRequest = false;
          setTimeout(() => {
            resolve();
          }, this._delay);
        });
      });

      req.on('error', (e) => {
        reject(`problem with request: ${e.message}`);
      });

      req.write(body);
      req.end();
    });
  }

  private _getRequestOptions() {
    return {
      hostname: this.domain,
      port: this.port,
      path: '/sony/IRCC',
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
        soapaction: '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
        'x-auth-psk': this.authKey,
      },
    };
  }

  private _getIRCCCodeXMLBody(IRCCCode: string) {
    return `<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1"><IRCCCode>${IRCCCode}</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>`;
  }
}
