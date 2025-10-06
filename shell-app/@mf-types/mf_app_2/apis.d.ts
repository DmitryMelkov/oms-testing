
    export type RemoteKeys = 'mf_app_2/App' | 'mf_app_2/Documents';
    type PackageType<T> = T extends 'mf_app_2/Documents' ? typeof import('mf_app_2/Documents') :T extends 'mf_app_2/App' ? typeof import('mf_app_2/App') :any;