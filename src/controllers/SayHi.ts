import { Controller, Get, JsonController, Post } from 'routing-controllers';

@Controller('/miewmiew')
class SayHi {
    @Get('/v1')
    async get(): Promise<any> {
        return {
            'sirawich': 'SaWaddee Krabbbb :3'
        };
    }
}

export default SayHi;
