
    export type RemoteKeys = 'mf_app_1/App' | 'mf_app_1/Applications';
    type PackageType<T> = T extends 'mf_app_1/Applications' ? typeof import('mf_app_1/Applications') :T extends 'mf_app_1/App' ? typeof import('mf_app_1/App') :any;