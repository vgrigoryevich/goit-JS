class Notepad {
    /*
     * Перенеси свойства и методы конструктора в класс
     *
     * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
     * для этого создай свойство _notes, в котором храни массив заметок,
     * а геттер notes возвращает значение этого поля
     *
     * Добавь статическое свойство Priority используя ключевое слово static
     */


    constructor(notes = []) {
        this._notes = notes;
        
     }

static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};

get notes () {
    return this._notes;
 }

    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */

    findNoteById(id) {
        for (let note of this._notes) {
            if (note.id === id)
                return note;
        }
    };

    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    saveNote(note) {
        this._notes.push(note);
    };

    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    deleteNote(id) {
        for (let i = 0; i < this._notes.length; i += 1) {
            const note = this._notes[i];
            if (note.id === id) {
               this._notes.splice(i, 1);
               return
            }
        }

    };

    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    updateNoteContent(id, updatedContent) {
        let newNote = {};
        let indexOfNewNote;
        for (let note of this._notes) {
            if (note.id === id) {
                indexOfNewNote = this._notes.indexOf(note);
                newNote = {
                    ...note,
                    ...updatedContent
                };
                notepad.notes[indexOfNewNote] = newNote;
            }
        }
        return newNote;
    };

    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    updateNotePriority(id, priority) {
        let newNote = {};
        for (let note of this._notes) {
            if (note.id === id) {
                note.priority = priority;
                newNote = note;
            }
        }
        return newNote;
    };

    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    filterNotesByQuery(query) {
        let listOfNotes = [];
        for (let note of this._notes) {
            const byQuery = `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase());
        if (byQuery) {
            listOfNotes.push(note);
        }
    }
        return listOfNotes;
    };

    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    filterNotesByPriority(priority) {
        let listOfNotes = [];
        for (let note of this._notes) {
            if (note.priority === priority) {
                listOfNotes.push(note)
            }
        }
        return listOfNotes;

    };
};

const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: Notepad.Priority.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: Notepad.Priority.NORMAL,
    },
  ];
  
  const notepad = new Notepad(initialNotes);
  
  /*
    Смотрю что у меня в заметках после инициализации
  */
  console.log('Все текущие заметки: ', notepad.notes);
  
  /*
   * Добавляю еще 2 заметки и смотрю что получилось
   */
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.Priority.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.notes);
  
  /*
   * Зима уже близко, пора поднять приоритет на покупку одежды
   */
  notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);
  
  console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);
  
  /*
   * Решил что фреймворки отложу немного, понижаю приоритет
   */
  notepad.updateNotePriority('id-3', Notepad.Priority.LOW);
  
  console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);
  
  /*
   * Решил отфильтровать заметки по слову html
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
  );
  
  /*
   * Решил отфильтровать заметки по слову javascript
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
  );
  
  /*
   * Хочу посмотреть только заметки с нормальным приоритетом
   */
  console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
  );
  
  /*
   * Обновим контент заметки с id-3
   */
  notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
  });
  
  console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.notes,
  );
  
  /*
   * Повторил HTML и CSS, удаляю запись c id-2
   */
  notepad.deleteNote('id-2');
  console.log('Заметки после удаления с id -2: ', notepad.notes);
