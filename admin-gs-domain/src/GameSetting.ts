export interface BaseSetting {
    id: string;
    name: string;
    description: string;
}

export interface EnumSetting extends BaseSetting {
    type: 'enum';
    default?: string;
}

export interface TextSetting extends BaseSetting {
    type: 'text';
    default?: string;
}

export interface IntSetting extends BaseSetting {
    type: 'int';
    default?: number;
}

export interface PortSetting extends BaseSetting {
    type: 'port';
    default?: number;
}

export type GameSetting = EnumSetting | TextSetting | IntSetting | PortSetting
