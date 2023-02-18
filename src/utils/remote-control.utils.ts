import { RemoteType } from '@/enums';
import { BaseRemoteControl, BaseRemoteControlParams } from '@/types';

export class RemoteControlUtils {
  private static _instance: RemoteControlUtils;
  private _typeMap!: Record<
    RemoteType,
    new (params: BaseRemoteControlParams) => BaseRemoteControl
  >;
  private constructor() {}

  setTypeMap(
    typeMap: Record<
      RemoteType,
      new (params: BaseRemoteControlParams) => BaseRemoteControl
    >
  ): void {
    this._typeMap = typeMap;
  }

  newRemoteControl(
    type: RemoteType,
    params: BaseRemoteControlParams
  ): BaseRemoteControl {
    if (!this._typeMap) {
      throw new Error('TypeMap required for generating new remote control');
    }
    const aConstructor = this._typeMap[type];
    if (!aConstructor) {
      throw new Error(
        `Unknown type ${type}. Known types are ${Object.keys(this._typeMap)}`
      );
    }
    return new aConstructor(params);
  }

  static getInstance(): RemoteControlUtils {
    if (!this._instance) {
      return new RemoteControlUtils();
    }
    return this._instance;
  }
}
