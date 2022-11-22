package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RequestMapping("/")
public class StartPageController {
    @GetMapping()
    public String startPage() {
        return "StartPage";
    }
}
