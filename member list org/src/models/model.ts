interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface Context {
  inputValue: string;
  setInputValue: (value: string) => void;
  members: MemberEntity[];
  setMembers: (value: MemberEntity[]) => void;
}
