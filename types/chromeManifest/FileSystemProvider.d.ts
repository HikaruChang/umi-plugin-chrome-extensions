declare namespace chromeManifest {
  export interface FileSystemProvider {
    configurable?: boolean;
    watchable?: boolean;
    multiple_mounts?: boolean;
    source: 'file' | 'device' | 'network';
  }
}
