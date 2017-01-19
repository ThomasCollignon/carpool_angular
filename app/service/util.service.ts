import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    private central = false;

    private centralHostUrl = 'http://lowcost-env.uwghuuaeu3.us-west-2.elasticbeanstalk.com/rest/';
    private localHostUrl = 'http://localhost:8081/carpool_web_connector/rest/';

    getUrl(resource: string): string {
        let resourceUrl: string;
        if (this.central) {
            resourceUrl = this.centralHostUrl + resource;
        }
        else {
            resourceUrl = this.localHostUrl + resource;
        }
        return resourceUrl;
    }
}
