export interface GroupsInput {
  offset: string;
  records: {
    id: string;
    createTime: string;
    fields: {
      'Group Name': string;
      Recid: string;
      Cluster: string;
      'Link to Contact Group': string;
      'Last Modified Time': string;
      'Link to sign-up as volunteer': string;
    }
  }[]
}

export type GroupsOutput = { name: string, link: string }[];
