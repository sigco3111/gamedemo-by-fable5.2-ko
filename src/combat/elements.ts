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
  phys: { name: '무', color: '#e8e8e8', mark: '', markDesc: '', burst: '', burstDesc: '' },
  blaze: { name: '화염', color: '#ff7a2e', mark: '화상', markDesc: '지속적으로 화염 피해를 받습니다', burst: '폭연', burstDesc: '대상 위치에서 폭발해 주변 적에게 번집니다', dot: 0.22 },
  tide: { name: '물결', color: '#3fa6ff', mark: '젖음', markDesc: '공격력 20% 감소', burst: '밀물', burstDesc: '주변 적을 밀쳐내고 현재 캐릭터의 생명력을 회복합니다', weaken: 0.2 },
  frost: { name: '서리', color: '#a8e4ff', mark: '둔화', markDesc: '이동과 공격이 느려집니다', burst: '빙결', burstDesc: '대상을 잠시 얼려 버립니다', slow: 0.4 },
  volt: { name: '번개', color: '#ffd23e', mark: '감전', markDesc: '지속적으로 약간의 번개 피해를 받습니다', burst: '연쇄', burstDesc: '번개가 근처 적 사이를 튑니다', dot: 0.12 },
  gale: { name: '질풍', color: '#7df0c8', mark: '균형 상실', markDesc: '방어력 25% 감소', burst: '소용돌이', burstDesc: '주변 적을 한곳으로 끌어모읍니다', defDown: 0.25 },
  astral: { name: '별', color: '#d59bff', mark: '별일식', markDesc: '받는 피해 10% 증가', burst: '별폭발', burstDesc: '단일 대상에 큰 피해를 주고 원소 에너지를 회복합니다', vuln: 0.1 },
  shade: { name: '어둠', color: '#7a6cff', mark: '악몽', markDesc: '받는 피해 15% 증가', burst: '꿈 침식', burstDesc: '대상을 잠재우고 다음 공격의 피해가 두 배가 됩니다', vuln: 0.15 },
  radiance: { name: '빛', color: '#fff3b8', mark: '노광', markDesc: '방어력 15% 감소', burst: '광휘', burstDesc: '범위 피해를 주고 파티 전체의 공격력을 높입니다', defDown: 0.15 },
};
