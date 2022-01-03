// Please update this type as same as with the data shape.

export default function move(list: any, source: any, destination: any) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].files.length; j++) {
      if (list[i].files[j].id === source) {
        if (!list[i].files[j].name.startsWith('File')) {
          console.log('Not a file');
        } else {
          const newFile = list[i].files;
          const movedData = list[i].files[j];
          newFile.splice(j, 1);
          list[i].files = newFile;
          PustItem(list, destination, movedData);
        }
      }
    }
  }
}

function PustItem(list: any, target: string, file: string) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === target) {
      if (!list[i].name.startsWith('Folder')) {
        console.log('Not in folder');
      } else {
        list[i].files.push(file);
      }
    }
  }
}

const list = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '4', name: 'File 3' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [{ id: '7', name: 'File 5' }],
  },
];

move(list, '3', '6');
console.log(list[0].files);
console.log(list[1].files);
