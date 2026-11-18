/** 八种属性，每位角色一种；phys 是无属性（敌人的普通攻击） */
export type Elem = 'phys' | 'blaze' | 'tide' | 'frost' | 'volt' | 'gale' | 'astral' | 'shade' | 'radiance';

export interface ElemInfo {
  name: string; color: string;
  /** 印记自带的效果 */
  mark: string; markDesc: string;
  /** 用这个属性去引爆别的印记时的效果 */
  burst: string; burstDesc: string;
  dot?: number; slow?: number; weaken?: number; defDown?: number; vuln?: number;
}

export const ELEM: Record<Elem, ElemInfo> = {
  phys: { name: '无', color: '#e8e8e8', mark: '', markDesc: '', burst: '', burstDesc: '' },
  blaze: { name: '炽', color: '#ff7a2e', mark: '灼烧', markDesc: '持续受到火焰伤害', burst: '爆燃', burstDesc: '在目标处爆炸，波及周围敌人', dot: 0.22 },
  tide: { name: '潮', color: '#3fa6ff', mark: '浸润', markDesc: '攻击力降低 20%', burst: '涌潮', burstDesc: '击退周围敌人，并为当前角色回复生命', weaken: 0.2 },
  frost: { name: '霜', color: '#a8e4ff', mark: '迟缓', markDesc: '移动和出手变慢', burst: '凝冻', burstDesc: '把目标冻住一小段时间', slow: 0.4 },
  volt: { name: '雷', color: '#ffd23e', mark: '感电', markDesc: '持续受到少量雷伤害', burst: '连锁', burstDesc: '闪电在附近敌人之间弹跳', dot: 0.12 },
  gale: { name: '岚', color: '#7df0c8', mark: '失衡', markDesc: '防御力降低 25%', burst: '卷集', burstDesc: '把周围敌人吸到一起', defDown: 0.25 },
  astral: { name: '星', color: '#d59bff', mark: '星蚀', markDesc: '受到的伤害提高 10%', burst: '星爆', burstDesc: '对单体造成大量伤害，并回复元素能量', vuln: 0.1 },
  shade: { name: '影', color: '#7a6cff', mark: '梦魇', markDesc: '受到的伤害提高 15%', burst: '蚀梦', burstDesc: '让目标陷入沉睡，下一击伤害翻倍', vuln: 0.15 },
  radiance: { name: '光', color: '#fff3b8', mark: '曝辉', markDesc: '防御力降低 15%', burst: '辉耀', burstDesc: '范围伤害，并提高全队攻击力', defDown: 0.15 },
};
