import { TContentComponent } from '../types/content.types';
import { loremIpsum } from 'react-lorem-ipsum';

export const feedDemoConfig: TContentComponent[] = [
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Coy Maleport',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-10-20 15:26:09',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },

    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'social',
        type: 'post',
        author: 'Teresita Blitzer',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postTime: '2022-10-20 12:55:55',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Issac Micco',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/800/600`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Florine Stuver',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'social',
        type: 'post',
        author: 'Coy Maleport',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/400`,
        postTime: '2022-10-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },

    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Teresita Blitzer',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Issac Micco',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Florine Stuver',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/400`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'hr',
        type: 'post',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-10-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },

    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'hr',
        type: 'post',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-08-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'social',
        type: 'post',
        author: 'Florine Stuver',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Coy Maleport',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-10-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },

    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Teresita Blitzer',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Issac Micco',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Florine Stuver',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Coy Maleport',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-10-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },

    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Teresita Blitzer',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-04',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Issac Micco',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
    {
        title: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 20)),
        tag: 'business',
        type: 'post',
        author: 'Florine Stuver',
        avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${Math.random()}`,
        postImage: `https://picsum.photos/1200/800`,
        postTime: '2022-09-03',
        postDescription: loremIpsum()
            .toString()
            .slice(0, Math.floor(Math.random() * 100)),
    },
];
