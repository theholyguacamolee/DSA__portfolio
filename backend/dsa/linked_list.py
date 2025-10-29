class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head:
            new_node.next = self.head
            self.head = new_node
        else:
            self.tail = new_node
            self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head:
            self.tail.next = new_node
            self.tail = new_node
        else:
            self.head = new_node
            self.tail = new_node
    
    def search(self, data):
        current_node = self.head
        while current_node:
            if current_node.data == data:
                return True
            else:
                current_node = current_node.next
        return False
    
    def remove_at_beginning(self):
        if not self.head:
            return None
        removed_data = self.head.data
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
        return removed_data
    
    def remove_at_end(self):
        if not self.head:
            return None
        removed_data = self.tail.data
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            current_node = self.head
            while current_node.next != self.tail:
                current_node = current_node.next
            current_node.next = None
            self.tail = current_node
        return removed_data
    
    def remove_at(self, data):
        if not self.head:
            return None
        if self.head.data == data:
            return self.remove_at_beginning()
        current_node = self.head
        while current_node.next:
            if current_node.next.data == data:
                removed_data = current_node.next.data
                if current_node.next == self.tail:
                    self.tail = current_node
                    current_node.next = None
                else:
                    current_node.next = current_node.next.next
                return removed_data
            current_node = current_node.next
        return None
    
    def to_array(self):
        """Convert linked list to array for JSON serialization"""
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
