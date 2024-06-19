import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import sdk from '../../sentry-sdk/index'

const app = createApp(App);

const addMapFileUrl = (fileUrl: string) => {
	const urlPattern = /https?:\/\/\S+/g; // 匹配以http或https开头的URL
	const matches = fileUrl.match(urlPattern);
	const splitArr = matches?.toString().split('/') ?? [];
	let mapFileUrl = splitArr[splitArr.length - 1];
	if (!mapFileUrl) {
		return;
	}
	if (mapFileUrl.indexOf('?') !== -1) {
		mapFileUrl = mapFileUrl.replace(/\?/g, '.map?');
	} else {
		mapFileUrl += '.map';
	}
	splitArr[splitArr.length - 1] = mapFileUrl;
	return splitArr.join('/');
};

const returnOption = sdk({
    xhrCallback: (xhr) => {
        console.log(xhr);
    },
    fetchCallback: (data) => {
        console.log(data);
    },
    jsCallback: (err: any) => {
        console.log({
            fileUrl: addMapFileUrl(err.filename),
            err: {
                lineno: err.lineno,
                colno: err.colno,
            },
        });
    },
    sourceCallback: (err: any) => {
        console.log('文件资源加载错误上报' + err.target.src + '资源请求失败');
    },
    unHandledRejectionCallback: (event) => {
        console.log(event);
    },
    vueErrorOption: {
        vue: app,
        vueErrorCallback: (err: any,vm: any, info: any) => {
            console.log(err);
            console.log(returnOption,'returnOption');
        }
    }
});

app.use(ElementPlus).mount('#app')
