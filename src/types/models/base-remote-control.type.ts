import { ActionMap } from '@/types/models/action-map.type';
import { BaseRemoteControlAction } from '@/types/models/base-remote-control-action.type';
import { BaseRemoteControlParams } from '@/types/models/base-remote-control-param.type';

export abstract class BaseRemoteControl {
  readonly domain: string;
  readonly port: number;
  readonly authKey: string;
  readonly debug: boolean;
  protected _activeRequest = false;
  protected _activeSequence = false;
  protected _delay = 500;
  protected _openedApp: string | null = null;

  constructor({
    domain,
    port,
    authKey = '0000',
    debug = false,
  }: BaseRemoteControlParams) {
    this.domain = domain;
    this.port = port;
    this.authKey = authKey;
    this.debug = debug;
  }

  actionsMap(): ActionMap {
    return this._actionsMap(this._getActions());
  }
  /**
   * @param  {BaseRemoteControlAction} actionType
   * @return {Promise}
   */
  abstract sendAction(actionType: BaseRemoteControlAction): Promise<void>;

  protected abstract _getActions(): BaseRemoteControlAction[];

  /**
   * Get the placement of buttons on the remote
   */
  private _actionsMap(actions: BaseRemoteControlAction[]): ActionMap {
    return actions.reduce(
      (result: ActionMap, action: BaseRemoteControlAction) => {
        const row = result[action.x] || {};
        const column = row[action.y] || [];
        column.push(action);
        return {
          ...result,
          [action.x]: {
            ...result[action.x],
            [action.y]: column,
          },
        };
      },
      {}
    );
  }
}
